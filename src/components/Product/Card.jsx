

const Card = ({ item }) => {
 
  const img = item.image;

  const title = item.title;
  const desc = item.desc;
//   const id = item.id;



 

  return (
    <div>
      <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
        <div className=" flex flex-col gap-6">
          <div>
            <img
              src={img}
              width={200}
              height={200}
              alt="shoe"
              className="mx-auto"
            />
           <a href={item.url}>
              <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse">
                preview
              </button>
            </a>
          </div>

          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
        {title}
          </p>
          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
         {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
