'use client'
import React from 'react'
import SmButton from '../components/SmButton'
import SmInput from "@/app/components/SmInput";
import {InfoOutlined, UserOutlined} from "@ant-design/icons";
import SmPasswordInput from "@/app/components/SmPasswordInput";
import SmCheckbox from "@/app/components/SmCheckbox";
import DynamicForm from "@/app/components/DynamicForm";
import SmOTPInput from "@/app/components/SmOTPInput";
const page = () => {
  const formState: unknown = {
      fields: [
          {
              fieldKey: "name",
              renderComponent: SmInput,
              componentProps: {
                  labelClass:"text-sm text-red-500 font-semibold",
                  inputName:"test" ,
                  label:"Name",
                  placeholder:"Name",
                  fullWidth:true,
                  value: "",
                  size: "large",
              }
          },
          {
              fieldKey: "name test",
              renderComponent: SmInput,
              componentProps: {
                  labelClass:"text-sm text-red-500 font-semibold",
                  inputName:"test" ,
                  label:"Name test",
                  placeholder:"Name test",
                  fullWidth:true,
                  value: "",
                  size: "large",
              }
          },
          {
              fieldKey: "surname",
              renderComponent: SmInput,
              componentProps: {
                  labelClass:"text-sm text-red-500 font-semibold",
                  inputName:"surname" ,
                  label:"Surname",
                  placeholder:"Placeholder işte",
                  fullWidth:true,
                  value: "",
                  size: "large",
              }
          },
          {
              fieldKey: "password",
              renderComponent: SmPasswordInput,
              componentProps: {
                  labelClass:"text-sm text-red-500 font-semibold",
                  inputName:"test6",
                  label:"Password",
                  placeholder:"Placeholder işte",
                  fullWidth: true,
                  size:"large",
                  value: ""
              }
          },
          {
              fieldKey: "privacypolicy",
              renderComponent: SmCheckbox,
              componentProps: {
                  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempore.",
                  checked: false
              }
          }
      ],
      initialData: {
          name: "",
          surname: "",
          password: "",
          privacypolicy: "",
      }
  }
  const handleSubmit = (e: Record<string, string>) => {
      console.log(e, "from parent")
  }
    return (
      <div className='flex flex-col items-center p-10'>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <h1 className={"text-4xl font-semibold"}>BUTTONS</h1>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          {/*--------------------------BUTTONS START---------------------------*/}
          <div className='!flex items-center justify-between gap-3 w-1/2'>
              <SmButton onClick={() => console.log("fucukoglu")} className={"test-button"} text='testttt' type='primary'/>
              <SmButton onClick={() => console.log("faruk")} text='Button'/>
              <SmButton text='Button' type='dashed'/>
              <SmButton text='Button' type='text'/>
              <SmButton text='Button' type='link'/>
          </div>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <div className='!flex items-center justify-between gap-3 w-1/2'>
              <SmButton text='Button' type='primary' loading={true}/>
              <SmButton text='Button' loading/>
              <SmButton text='Button' type='dashed' loading/>
              <SmButton text='Button' type='text' loading/>
              <SmButton text='Button' type='link' loading/>
          </div>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <div className='!flex items-center justify-between gap-3 w-1/2'>
              <SmButton text='Button' type='primary' disabled/>
              <SmButton text='Button' disabled/>
              <SmButton text='Button' type='dashed' disabled/>
              <SmButton text='Button' type='text' disabled/>
              <SmButton text='Button' type='link' disabled/>
          </div>
          {/*--------------------------BUTTONS END------------------------------*/}
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <h1 className={"text-4xl font-semibold"}>INPUTS</h1>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          {/*--------------------------INPUTS START-----------------------------*/}
          <div className='!flex flex-col items-center justify-between gap-3 w-1/2'>
              <SmInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test" label="Basic Input(Small)"
                  placeholder="Placeholder işte"
                  fullWidth
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test2" label="Input with prefix"
                  placeholder="Placeholder işte"
                  fullWidth
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test2" label="Input with prefix and suffix"
                  placeholder="Placeholder işte"
                  fullWidth
                  suffix={<InfoOutlined/>}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-lg text-blue-500 font-semibold"}
                  inputName="test2"
                  label="Input with prefix and suffix with tooltip"
                  placeholder="Placeholder işte"
                  fullWidth
                  suffix={<InfoOutlined/>}
                  toolTipForSuffix
                  suffixToolTipTitle={"SelfMeta"}
                  inputClass={"test"}
              />
              <SmInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test" label="Disabled"
                  placeholder="Placeholder işte"
                  fullWidth
                  disabled
              />
          </div>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <div className='!flex flex-col items-center justify-between gap-3 w-1/2'>
              <SmInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test11" label="Basic Input(Middle)"
                  placeholder="Placeholder işte"
                  fullWidth
                  size={"middle"}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test12" label="Input with prefix"
                  placeholder="Placeholder işte"
                  fullWidth
                  size={"middle"}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test13" label="Input with prefix and suffix"
                  placeholder="Placeholder işte"
                  fullWidth
                  suffix={<InfoOutlined/>}
                  size={"middle"}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test14" label="Input with prefix and suffix with tooltip"
                  placeholder="Placeholder işte"
                  fullWidth
                  suffix={<InfoOutlined/>}
                  toolTipForSuffix
                  suffixToolTipTitle={"SelfMeta"}
                  size={"middle"}
              />
              <SmInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test15" label="Disabled"
                  placeholder="Placeholder işte"
                  size={"middle"}
                  fullWidth
                  disabled
              />
          </div>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <div className='!flex flex-col items-center justify-between gap-3 w-1/2'>
              <SmInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test6" label="Basic Input(large)"
                  placeholder="Placeholder işte"
                  fullWidth
                  size={"large"}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test7" label="Input with prefix"
                  placeholder="Placeholder işte"
                  fullWidth
                  size={"large"}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test8" label="Input with prefix and suffix"
                  placeholder="Placeholder işte"
                  fullWidth
                  suffix={<InfoOutlined/>}
                  size={"large"}
              />
              <SmInput
                  prefix={<UserOutlined/>}
                  labelClass={"text-sm text-blue-500 font-semibold"}
                  inputName="test9" label="Input with prefix and suffix with tooltip"
                  placeholder="Placeholder işte"
                  fullWidth
                  suffix={<InfoOutlined/>}
                  toolTipForSuffix
                  suffixToolTipTitle={"SelfMeta"}
                  size={"large"}
              />
              <SmInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test10" label="Disabled"
                  placeholder="Placeholder işte"
                  fullWidth
                  size={"large"}
                  disabled
              />
          </div>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <div className='!flex flex-col items-center justify-between gap-3 w-1/2'>
              <SmPasswordInput
                  labelClass={"text-sm text-red-500 font-semibold"}
                  inputName="test6" label="Password Input"
                  placeholder="Placeholder işte"
                  fullWidth
                  size={"large"}
              />
          </div>
          {/*--------------------------INPUTS END-----------------------------*/}
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          <h1 className={"text-4xl font-semibold"}>CHECKBOXES</h1>
          <div className='w-full h-[2px] bg-slate-500 my-10'/>
          {/*--------------------------CHECKBOX START-------------------------*/}
          <div className='flex items-center gap-4'>
              <SmCheckbox text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempore."}/>
              <SmCheckbox text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempore."}/>
              <SmCheckbox text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, tempore."}/>
          </div>
          {/*--------------------------CHECKBOX END---------------------------*/}
          {/*--------------------------DYNAMICFORM START----------------------*/}
          <DynamicForm fields={formState.fields} initialData={formState.initialData} handleSubmit={(e: Record<string, string>) => handleSubmit(e)}/>
          {/*--------------------------DYNAMICFORM END----------------------*/}
          {/*--------------------------OTP START----------------------*/}
          <SmOTPInput size={"large"} time={5}/>
          {/*--------------------------OTP END----------------------*/}
      </div>
  )
}

export default page
