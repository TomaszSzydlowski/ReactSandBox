import { FC } from "react";

interface HelloProps {
    name?: string;
}

export const Hello: FC<HelloProps> = ({ name }) => {
    if (name) {
        return <h1>Hello, {name}!</h1>;
    }
    return <h1>Hello, no name!</h1>;
};
