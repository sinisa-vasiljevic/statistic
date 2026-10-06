'use strict';
const CACHE_NAME='u15-statistik-v8.17-offline';
const CACHE_PREFIX='u15-statistik-';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./icon-1024.png'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    for(const path of APP_SHELL){
      try{
        const response=await fetch(path,{cache:'reload'});
        if(response.ok) await cache.put(path,response.clone());
      }catch(error){
        console.warn('Vorladen fehlgeschlagen:',path,error);
      }
    }
    const index=await cache.match('./index.html',{ignoreSearch:true});
    if(!index) throw new Error('index.html konnte nicht offline gespeichert werden');
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)));
    if(self.registration.navigationPreload) await self.registration.navigationPreload.enable().catch(()=>{});
    await self.clients.claim();
  })());
});

async function cachedIndex(){
  const cache=await caches.open(CACHE_NAME);
  return (await cache.match('./index.html',{ignoreSearch:true})) ||
         (await cache.match('index.html',{ignoreSearch:true})) ||
         (await cache.match('./',{ignoreSearch:true}));
}

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      const fallback=await cachedIndex();
      if(!navigator.onLine && fallback) return fallback;
      try{
        const preload=await event.preloadResponse;
        const response=preload || await fetch(request);
        if(response && response.ok){
          const cache=await caches.open(CACHE_NAME);
          await cache.put('./index.html',response.clone());
          await cache.put('./',response.clone());
          return response;
        }
      }catch(error){}
      if(fallback) return fallback;
      return new Response('<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>U15 Statistik offline</title><body style="font-family:system-ui;padding:24px"><h1>U15 Statistik</h1><p>Die App konnte noch nicht vollständig offline gespeichert werden. Bitte einmal online öffnen.</p></body></html>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
    })());
    return;
  }

  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const cached=(await cache.match(request,{ignoreSearch:true})) || (await cache.match(url.pathname.split('/').pop(),{ignoreSearch:true}));
    if(cached) return cached;
    try{
      const response=await fetch(request);
      if(response && response.ok) await cache.put(request,response.clone());
      return response;
    }catch(error){
      return new Response('',{status:503,statusText:'Offline'});
    }
  })());
});
