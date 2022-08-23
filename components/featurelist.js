import {Fragment} from "react";
import {BsCheck2Circle} from "react-icons/bs";

export default function FeatureList({features}) {
  return (
    <Fragment>
      {features.map((feature, index) => {
        return (
          <div key={index} className='flex w-fit my-2 pr-10'>
            <BsCheck2Circle size={24} />
            <p className='ml-3 font-rebond text-lg'>{feature}</p>
          </div>
        )
      })}
    </Fragment>
  )
}