<script context="module">
  import '../app.css';
</script>

<!-- <h1 class="font-sans text-headerBold text-xl">Blah</h1> -->
<!-- <p>Use flex-initial =(flex grow0 shrink1 basis<b>auto</b>) to allow a flex item to shrink but not grow, taking into account its initial size: equiv. to flex 1 1 0% (grow shrink basis)</p> -->
<!-- <p>Use flex-1 =(flex grow<b>1</b> shrink1 basis<b>0%</b>) to allow a flex item to grow and shrink as needed, ignoring its initial size: </p> -->
<!-- <p>Use flex-auto =(flex grow<b>1</b> shrink1 basis<b>auto</b>) to allow a flex item to grow and shrink, taking into account its initial size:</p> -->
<!-- <p>Use flex-none =(flex <b>none</b>;)=(flex grow<b>none</b> shrink1(default) basis<b>auto(default)</b>) to prevent a flex item from growing or shrinking:</p> -->
<!-- <h1>flex grow example</h1> -->
<!-- <div style="margin-right:0px" class="relative bg-purple-500 rounded-xl overflow-hidden dark:bg-slate-800/25"> -->
<!--   <div style="background-position:10px 10px" class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl overflow-auto p-8"> -->
<!--     <div class="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg"> -->
<!--       <div class="w-14 h-14 flex-none bg-green-subdued rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400"> -->
<!--         01 class="flex-none w-14" -->
<!--       </div> -->
<!--       <div class="p-4 grow rounded-lg flex items-center justify-center bg-amber-500 shadow-lg"> -->
<!--         02 class="grow w-14" -->
<!--       </div> -->
<!--       <div class="p-4 w-14 h-14 flex-none bg-green-subdued rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400"> -->
<!--         03=01 -->
<!--       </div> -->
<!--     </div> -->
<!--   </div> -->
<!-- </div> -->
<!-- <h1>flex no grow example</h1> -->
<!-- <div style="margin-right:0px" class="relative bg-purple-500 rounded-xl overflow-hidden dark:bg-slate-800/25"> -->
<!--   <div style="background-position:10px 10px" class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl overflow-auto p-8"> -->
<!--     <div class="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg"> -->
<!--       <div class="w-14 h-14 grow flex-none bg-green-subdued rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400"> -->
<!--         01 class="grow w-14" -->
<!--       </div> -->
<!--       <div class="p-4 grow-0 w-14 rounded-lg flex items-center justify-center bg-amber-500 shadow-lg"> -->
<!--         02 class="grow-0 w-14" -->
<!--       </div> -->
<!--       <div class="p-4 w-14 h-14 grow bg-green-subdued rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400"> -->
<!--         03=01 -->
<!--       </div> -->
<!--     </div> -->
<!--   </div> -->
<!-- </div> -->
<!-- <h1>flex shrink example</h1> -->
<!-- <div style="margin-right:0px" class="relative bg-purple-500 rounded-xl overflow-hidden dark:bg-slate-800/25"> -->
<!--   <div style="background-position:10px 10px" class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl overflow-auto p-8"> -->
<!--     <div class="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg"> -->
<!--       <div class="w-14 h-14 flex-none bg-green-subdued rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400"> -->
<!--         01 -->
<!--       </div> -->
<!--       <div class="p-4 shrink rounded-lg flex items-center justify-center bg-amber-500 shadow-lg"> -->
<!--         02 -->
<!--       </div> -->
<!--       <div class="p-4 w-14 h-14 flex-none bg-green-subdued rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400"> -->
<!--         03 -->
<!--       </div> -->
<!--     </div> -->
<!--   </div> -->
<!-- </div> -->
<!-- <h1 class="" style="font-family: 'Barlow', 'Fallback Outline', sans-serif; font-size: 100px; font-weight: 100;">Blah</h1> -->
<!-- <h1 class="font-headerBold" style="font-size: 80pt;">RECREATION FROM SCRATCH</h1> -->
<!-- /> -->
<slot />
