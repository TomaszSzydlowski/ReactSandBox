import React, {FC} from "react";
import {Hello} from "../hello/hello";

interface ContactProps {
    name?: string
    email?: string
    site?: string
}

export const Contact: FC<ContactProps> = ({name, email, site}) => {
    return (
        <>
            <div>
                Contact {name} via{" "}
                <a data-testid="email" href={"mailto:" + email}>
                    email
                </a>
                or on their <a data-testid="site" href={site}>
                website
            </a>
            </div>
            <Hello/>
        </>
    )
}