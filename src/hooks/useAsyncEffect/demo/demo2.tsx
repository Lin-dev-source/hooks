import React, { useState } from "react";
import useAsyncEffect from "../index"

export default () => {

  const fn = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
  }

  useAsyncEffect(async () => {
    console.log('等待...');
    await fn()
    console.log('完成');
  }, []);
};
