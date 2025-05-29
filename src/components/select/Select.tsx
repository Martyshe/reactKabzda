import { ChangeEvent, useState } from "react";
import { RatingValueType } from "../rating/Rating";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: any;
//   onChange: (value: any) => void;
  items: ItemType[];
};

export function Select(props: SelectPropsType) {
  const [parentValue, setParentValue] = useState<string | undefined>(props.value);
  const [ switcher, setSwitcer] = useState<boolean>(false)

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <div>
      <div onClick={()=>setSwitcer(!switcher)}>{parentValue}</div>
      {switcher ? props.items.map(el => {

        return <div key={el.value} onClick={()=>{setParentValue(el.title)
             setSwitcer(false)
            }}>{el.title}</div>
        }) : null}
    </div>
  );
}
