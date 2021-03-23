import SubCatItem from "./SubCatItem";

const SubCategories = ({ subCategories, filterSubCategories }) => {

  return (
    <div className="px-4 mb-2 max-w-sm mx-auto flex justify-between">
      {subCategories?.map((item, idx) => {
        return (
          <SubCatItem item={item} key={idx} onClick={() => filterSubCategories(item)}/>
        );
      })}
    </div>
  );
};

export default SubCategories;
