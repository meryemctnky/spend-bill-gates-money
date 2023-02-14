import React, { useEffect, useState} from "react";
import { Box, Image, Text, Input, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../redux/productsSlice";

const numberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

const ProductCard = (props) => {
  const [count, setCount] = useState(0);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const currentMoney = useSelector((state) => state.products.currentMoney);
  const dispatch = useDispatch();

  const { id, name, price, link } = props;
  
  
  useEffect(() => {
    dispatch(updateCount({ id, count }));
  }, [count, dispatch])

  useEffect(() => {
    if (price > currentMoney) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [currentMoney]);
  

  const updateProduct = (newCount) => {
    const maxCount = Math.floor(currentMoney /price) + count; 

    if (isNaN(newCount) || newCount < 0) return;

    if (newCount && newCount > 0) {
      if (newCount > maxCount && currentMoney >= 0) {
        setButtonEnabled(true);
        setCount(maxCount);
      } else {
        setButtonEnabled(false);
        setCount(newCount);
      }
    } else {
      setCount(0);
    }
  };
  
  const handleBuyProduct = () => {
    setCount(Number(count) + 1);
  };
  
  const handleSellProduct = () => {
    if (count > 0) {
      setCount(Number(count) - 1);
    }
  };
  
  const handleInputChange = (event) => {
    updateProduct(parseInt(event.target.value));
  };
  
  return (
    <Box bg="white" height="310px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Image boxSize="150px" objectFit="contain" src={link} alt="product image" mt="5px" />
      <Box mt="3" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        <Text fontSize="xl" fontWeight="bold" color="#333">
          {name}
        </Text>
        <Text fontSize="20px" fontWeight="medium" color="#24c486">
          {numberFormat.format(price)}
        </Text>
      </Box>
      <SimpleGrid columns={3} spacing="10px" my="3">
        <Box as="button" px={8} h={10} fontWeight="bold" className={`sell_${count > 0 ? "active" : "passive"}`} onClick={() => handleSellProduct()} >
          Sell
        </Box>
        <Input htmlSize={4} width="auto" placeholder="0" onChange={handleInputChange} value={count} textAlign="center"/>
        <Box as="button" className={`buy_${ buttonEnabled ? "passive" : "active"}`}  px={8} h={10} fontWeight="bold" onClick={() => handleBuyProduct()} >
          Buy
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ProductCard;
