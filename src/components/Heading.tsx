import { cn } from "../lib/utils"

interface HeadingProp {
    title:string,
    description?:string,
    isSubHeading?:boolean
}
const Heading = ({title,description,isSubHeading=false}:HeadingProp) => {
  return (
    <div>

        <h2 className={cn("text-3xl font-sans font-semibold text-gray-800 md:text-3xl " , isSubHeading && "text-lg md:text-xl")}>
        {title}    

        </h2>
        {description&& <p className="text-sm text-foreground">
            {description}
            </p>}
    </div>
  )
}

export default Heading