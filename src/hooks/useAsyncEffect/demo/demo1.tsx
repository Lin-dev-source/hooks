import React,{useState} from "react";
import useAsyncEffect from "../index"

function mockCheck(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

export default () => {
  const [pass, setPass] = useState<boolean>();

  useAsyncEffect(async () => {
    setPass(await mockCheck());
  }, []);

  return (
    <div>
      {pass === undefined && 'Checking...'}
      {pass === true && 'Check passed.'}
    </div>
  );
};
