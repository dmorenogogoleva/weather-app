import React from "react";
import { Loader } from "../loader/Loader";
import { Toaster } from "react-hot-toast";

interface PageLayoutProps {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  isLoading,
  children,
}) => {
  return (
    <>
      {isLoading ? <Loader /> : children}
      <Toaster />
    </>
  );
};
