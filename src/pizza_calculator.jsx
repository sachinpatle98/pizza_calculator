import React, { useState } from 'react'
import { Radio, Checkbox, Select } from 'antd'
import { Styledcard, Section, SectionTitle, Pricedisplay } from './pizza_calculator_style'
const { Option } = Select

const pizza_calculator = () => {
  const [size, setSize] = useState('medium')
  const [toppings, setToppings] = useState([])
  const [crust, setCrust] = useState('thin')

  const prices = {
    sizes: { small: 8, medium: 10, large: 12 },
    toppings: 1,
    crusts: { thin: 0, thick: 2, glutenFree: 3 }
  }

  const handleSizeChange = (e) => {
    setSize(e.target.value)
  }

  const handleToppingsChange = (checkedValues) => {
    setToppings(checkedValues)
  }

  const handleCrustChange = (value) => {
    setCrust(value)
  }

  const calculatePrice = () => {
    const sizePrice = prices.sizes[size]
    const toppingsPrice = toppings.length * prices.toppings
    const crustPrice = prices.crusts[crust]
    return sizePrice + toppingsPrice + crustPrice
  }

  return (
    <Styledcard title="Pizza Order Calculator" style={{ width: 400 }}>
      <Section>
        <SectionTitle>Pizza Size</SectionTitle>
        <Radio.Group onChange={handleSizeChange} value={size}>
          <Radio value="small">Small - $8</Radio>
          <Radio value="medium">Medium - $10</Radio>
          <Radio value="large">Large - $12</Radio>
        </Radio.Group>
      </Section>

      <Section>
        <SectionTitle>Toppings</SectionTitle>
        <Checkbox.Group onChange={handleToppingsChange}>
          <Checkbox value="pepperoni">Pepperoni - $1</Checkbox>
          <Checkbox value="mushrooms">Mushrooms - $1</Checkbox>
          <Checkbox value="onions">Onions - $1</Checkbox>
        </Checkbox.Group>
      </Section>

      <Section>
        <SectionTitle>Crust Type</SectionTitle>
        <Select defaultValue="thin" style={{ width: 200 }} onChange={handleCrustChange}>
          <Option value="thin">Thin - $0</Option>
          <Option value="thick">Thick - $2</Option>
          <Option value="glutenFree">Gluten-free - $3</Option>
        </Select>
      </Section>

      <Pricedisplay>Total Price: ${calculatePrice()}</Pricedisplay>
    </Styledcard>
  )
}

export default pizza_calculator
