import React from 'react'
import Cards from '@/Pages/Components/Cards/Index'
import { Stock_overview_cards } from '@/Data/Mock_Data/Stock_Summary_Data'
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { warehouses, product_data } from '@/Data/Mock_Data/Stock_Summary_Data'
import { Textarea } from "@/components/ui/textarea"

function Stock_Overview() {
  return (
    <div className='flex flex-col gap-3 shadow rounded-lg p-10'>
      <div className='flex flex-row justify-between'>
        <label className='text-xl font-bold'>Stock overview</label>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Dialog>
            <form>
              <DialogTrigger render={<Button className="text-white bg-orange-500 shadow underline">+ Update Stock</Button>} />
              <DialogContent className="sm:max-w-sm shadow-md shadow-orange-100">
                <DialogHeader>
                  <DialogTitle>Update Stock</DialogTitle>
                </DialogHeader>
                <FieldGroup>
                  <Field>
                    <Label htmlFor="name-1">Warehouse</Label>
                    <Select className="w-full" items={warehouses}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>- Select Warehouse -</SelectLabel>
                          {warehouses.map((item) => (
                            <SelectItem key={item.label} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="username-1">Product</Label>
                    <Select className="w-full" items={warehouses}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>- Select a Product -</SelectLabel>
                          {product_data.map((item) => (
                            <SelectItem key={item.label} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="name-1">Quantity Received</Label>
                    <Input placeholder='Eg: 200' id="name-1" name="name" />
                  </Field>
                  <Field>
                    <Label htmlFor="name-1">Reference/ Note</Label>
                    <Textarea placeholder="Type your message here." />
                  </Field>
                </FieldGroup>
                <div className='flex flex-row gap-1 justify-end'>
                  <DialogClose render={<Button variant="outline">Cancel</Button>} />
                  <Button type="submit" className="bg-orange-500">Add Stock</Button>
                </div>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>

      <div className='grid grid-col-1 sm:grid-col-2 lg:grid-cols-5 gap-3'>
        {
          Stock_overview_cards.map((element) => {
            return (<Cards {...element} />)
          })
        }
      </div>
    </div>
  )
}

export default Stock_Overview