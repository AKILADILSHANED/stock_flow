import React from 'react'
import { products } from '@/Data/Mock_Data/Stock_Summary_Data'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { useState } from 'react'
import { useMemo } from 'react'

function Product_Stock() {

  const [search, setSearch] = useState("");

  const filterCalculation = useMemo(
    () => {
      const normalizedSearch = String(search).toLocaleLowerCase().trim();
      return products.filter((item) => (String(item.Product).toLocaleLowerCase().includes(normalizedSearch) ||
        String(item.SKU).toLocaleLowerCase().includes(normalizedSearch) ||
        String(item.Remaining_Stock).toLocaleLowerCase().includes(normalizedSearch) ||
        String(item.With_FDOs).toLocaleLowerCase().includes(normalizedSearch) ||
        String(item.Variance).toLocaleLowerCase().includes(normalizedSearch) ||
        String(item.Status).toLocaleLowerCase().includes(normalizedSearch)));
    }, [search]
  );

  const lengthArray = filterCalculation.length === 0;

  return (
    <div className='flex flex-col justify-center p-10 rounded-lg shadow gap-10'>

      <div>
        <div>
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Search Product details</FieldLabel>
            <Input onChange={(e) => { setSearch(e.target.value) }} placeholder="Enter Product details" />
          </Field>
        </div>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Remaining Stock</TableHead>
              <TableHead>With FDOs</TableHead>
              <TableHead>Variance</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterCalculation.map((products) => (
              <TableRow key={products.Product}>
                <TableCell>{products.Product}</TableCell>
                <TableCell>{products.SKU}</TableCell>
                <TableCell>{products.Remaining_Stock}</TableCell>
                <TableCell>{products.With_FDOs}</TableCell>
                <TableCell>{products.Variance}</TableCell>
                <TableCell>{products.Status}</TableCell>
              </TableRow>
            ))}
            {
              lengthArray && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-lg text-slate-400">No products matched the selected filters</TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default Product_Stock