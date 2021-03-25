import TagItem from "../Tags/TagItem";
import IconStar from "./icons/IconStar";

const Specific = ({ Adresses, price, worktime, limits, Tags }) => {
  
  console.log("adress: ", Adresses);

  return (
    <div className="px-4 mb-5 flex flex-col w-95 mx-auto md:w-2/3 xl:w-1/2">
      <div className="mb-2.5 flex">
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </div>
      <div className="mb-2.5">
        <span className="font-bold">Цена: </span>от {price} руб.
      </div>
      <div className="mb-2.5">
        <span className="font-bold">Адрес: </span>
        {Adresses?.map((item, idx) => (
          <span className="mb-4 mr-2" item={item} key={idx}>
            {item.city}, {item.street}
          </span>
        ))}
      </div>
      <div className="mb-2.5">
        <span className="font-bold">Часы работы: </span>
        <span className="lowercase">{worktime}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">Возрастные ограничения: </span>
        {limits}
      </div>
      <div className="flex flex-wrap">
        {Tags.map((item, idx) => (
          <div className="mb-4 mr-2" key={idx}>
            <TagItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specific;