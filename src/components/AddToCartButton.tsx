"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "../hooks/useCart";
import { Product } from "../payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { addItem } = useCart();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() => {
        addItem(product);
      }}
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
