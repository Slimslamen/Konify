function Loading() {
  return (
    <>

      <div className="flex p-4 w-full flex-col mx-auto md:flex-wrap md:flex-row justify-between">

        <div className="outer min-h-[250px] h-[300px] md:w-[200px]">
          <div className="inner  max-w-full mb-2 h-[240px] w-[225px] bg-slate-100" />
          <div className=" double inner flex flex-row justify-between mt-5">
            <div className="w-[100px] bg-slate-100 h-[30px]" />
            <div className="w-[50px] bg-slate-100 h-[30px]"/>
          </div>
        </div> 

        <div className="min-h-[250px] h-[300px] md:w-[200px] ">
          <div className="max-w-full mb-2 h-[240px] w-[225px] bg-slate-100" />
          <div className="flex flex-row justify-between mt-5">
            <div className="w-[100px] bg-slate-100 h-[30px]" />
            <div className="w-[50px] bg-slate-100 h-[30px]"/>
          </div>
        </div> 

        <div className="min-h-[250px] h-[300px] md:w-[200px] ">
          <div className="max-w-full mb-2 h-[240px] w-[225px] bg-slate-100" />
          <div className="flex flex-row justify-between mt-5">
            <div className="w-[100px] bg-slate-100 h-[30px]" />
            <div className="w-[50px] bg-slate-100 h-[30px]"/>
          </div>
        </div> 

        <div className="min-h-[250px] h-[300px] md:w-[200px] m">
          <div className="max-w-full mb-2 h-[240px] w-[225px] bg-slate-100" />
          <div className="flex flex-row justify-between mt-5">
            <div className="w-[100px] bg-slate-100 h-[30px]" />
            <div className="w-[50px] bg-slate-100 h-[30px]"/>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Loading;
