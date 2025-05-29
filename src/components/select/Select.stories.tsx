import { Select } from "./Select";


export default {
  component: Select,
};

export const CustomSelect = () => {
    return <Select items={[
        { title: "artem", value: 1 },
        { title: "ivan", value: 2 },
      ]}
    //   onChange={ (value)=>{

    //   } }
      value={'Choose please'}
      />
}