import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import type { Interview } from "../types/User";
import { useEffect, useState, type ErrorInfo } from "react";
import { CustomBreadCrumb } from "./custom-bread-crum";
import { BreadcrumbPage } from "./ui/breadcrumb";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Heading from "./Heading";
import { Button } from "./ui/button";
import { Loader, Trash, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface FormMockInterview {
  initialData: Interview | null;
}

// interface formSchemaProps{
//     position:string,
//     techstack:string,
//     experience:string,
//     description:string
// }
type formData = z.infer<typeof formSchema>

const formSchema = z.object({
  position: z
    .string()
    .min(1, "position is required")
    .max(100, "less then 100 words for the position"),
    techstack:z.string().min(1,"Atleast One skill is required"),

    experience:z.coerce.number().min(0,"Experiecne required"),
    description:z.string().min(1,"description needed")
     

});
const FormMockInterview = ({ initialData }: FormMockInterview) => {

  
  const form = useForm({
    resolver:zodResolver(formSchema),
    defaultValues:initialData || {}
  })



  const {isValid,isSubmitted,isSubmitting} = form.formState

  const {userId} = useAuth()

  const [loading, setloading] = useState(false)

  const navigate = useNavigate()


  const title = initialData?.position ? initialData.position : "Create a new Mock Interview"


  const breadCrumbPage =  initialData?.position ? initialData.position : "Create"

  const actions = initialData ? "Save Changes":"Create"

  const toastMessage = initialData ? {title:"Updated Changes",description:"Updated changes in the mock interview"}:{title:"Created Mock Interview",description:"Created Mock interview "}


  const onSave = async()=>{
   try {
    
    setloading(true)
   } catch (error) {
    console.log(error)
    // toast.error({
    //   description:"Something went wrong try again later"
    // })
   } 
   finally {
    setloading(false)
   }
  }
  useEffect(()=>{

    if(initialData){
      form.reset({
        position:initialData.position,
        description:initialData.description,
        experience:initialData.experience,
        techstack:initialData.techstack
      })
    }
  },[initialData])





  return <div className="flex-col w-full space-y-4">
    

    <CustomBreadCrumb breadCrumbPage={breadCrumbPage } breadCrumpItems={[{label:"Mock Interview",link:"/generate"}]}>
      
    </CustomBreadCrumb>


    <div className="flex items-center justify-between mt-4">

      <Heading title={title} isSubHeading/>

      {
        initialData && <Button  size={"icon"} variant={"ghost"}>
          <Trash2 className="min-h-4 min-w-4 text-red-600"/>
        </Button>
      }

    </div>

    <Separator className="my-4"/>


    <FormProvider {...form}>
      <form  className="p-8  w-full rounded-lg flex flex-col justify-start items-start gap-4  shadow-lg">

<FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Role / Job Position</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- Full Stack Developer"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Job Description</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- Describe your job"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Years of Experience</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                  type="number"
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- 5"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="techstack"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">
                  <FormLabel>Tech Stacks</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Textarea
                    className="h-12"
                    disabled={loading}
                    placeholder="eg:- React, Typescript..."
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />


       <div className="w-full flex items-center justify-end gap-6">
            <Button
              type="reset"
              size={"sm"}
              variant={"outline"}
              disabled={isSubmitting || loading}
            >
              Reset
            </Button>
            <Button
              type="submit"
              size={"sm"}
              disabled={isSubmitting || !isValid || loading}
            >
              {loading ? (
                <Loader className="text-gray-50 animate-spin" />
              ) : (
                actions
              )}
            </Button>
          </div>
      </form>
    </FormProvider>
  </div>;
};

export default FormMockInterview;
