import {useEffect,useRef,useState} from 'react';
import * as pdfjs from 'pdfjs-dist';
import type { RenderTask } from 'pdfjs-dist';
import worker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc=worker;
export default function PdfPreview({url,title,large=false}:{url:string;title:string;large?:boolean}){const ref=useRef<HTMLCanvasElement>(null);const [failed,setFailed]=useState(false);useEffect(()=>{let canceled=false;const task=pdfjs.getDocument(url);let render:RenderTask|undefined;async function draw(){try{const pdf=await task.promise;const page=await pdf.getPage(1);if(canceled||!ref.current)return;const v=page.getViewport({scale:1});const viewport=page.getViewport({scale:(large?1600:720)/v.width});const canvas=ref.current;canvas.width=viewport.width;canvas.height=viewport.height;render=page.render({canvasContext:canvas.getContext('2d')!,viewport});await render.promise}catch{if(!canceled)setFailed(true)}}draw();return()=>{canceled=true;render?.cancel();void task.destroy()}},[url,large]);return failed?<span className="muted">PDF · {title}</span>:<canvas ref={ref} role="img" aria-label={title}/>}
