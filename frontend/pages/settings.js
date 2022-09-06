import { ButtonBootstrap } from "../objects/buttonBootstrap";
import { useState } from "react";
import { Background } from "../components/background";
import styles from "../styles/settingsPage.module.css"
import { Navbar } from "../components/navbar";
 
 export default function SettingsPage ({loggedIn}) {


    const options = [

        {
            header: {
                name:"Account",
            },

            values: [
                {
                    name: "Profile",
                    description: 
                        "Your email address is your identity on this application and is used to log in.",
                    tags: [
                        "email",
                        "username",
                        "first name",
                        "last name",
                        "date of birth",
                    ],
                },
                {
                    name: "Password",
                    description: "Change your password",
                    tags: [],
                },
                {
                    name: "Delete Account",
                    description: "Warning: Closing your account is irreversible",
                    tags: [],
                }
            ],
        },

        {
            header: {
                name:"Billing",
            },

            values: [
                {
                    name: "Billing Information",
                    description: "Manage your billing information",
                    tags: ["credit cards"],
                },
                {
                    name: "Free Dyno Usage",
                    description: "View your free plan usage statistics",
                    tags: [],
                },
                {
                    name: "Invoices",
                    description: "Track your invoices and their status",
                    tags: [],
                },
                {
                    name: "Invoice Address",
                    description: "We'll print this address on your invoice. If blank, we'll use your billing information instead",
                    tags: [],
                }
            ],
        },

        {
            header: {
                name:"Support",
            },

            values: [
                {
                    name: "Help",
                    description: "Having Trouble",
                    tags: [],
                },
                {
                    name: "FAQ",
                    description: "View our frequently asked questions",
                    tags: [],
                },
                {
                    name: "Contact us",
                    description: "Contact our support team",
                    tags: [],
                },
                {
                    name: "Report an issue",
                    description: "Report whats not working well",
                    tags: [],
                    url: "/privacy"
                }
            ],
        }

    ]


    const [visibleOptions, setVisibleOptions] = useState(options);

    const onChange = (e) => {
        e.preventDefault();
        const value = e.target.value;

        console.log("value", value);

        if (value.trim().length === 0) {
            setVisibleOptions(options);
            return;
        }

        const returnedItems = [];

        visibleOptions.forEach((option, index) => {
            const foundOptions = option.values.filter((item) => {
                return item.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1
                || item.description.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1
            });

            returnedItems[index] = {
                header: {
                    name: option.header.name,
                },
                values: foundOptions,
            };

            if (
                option.header.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1
            ) {
                returnedItems[index] = {
                    header: {
                        name: option.header.name,
                    },
                    values: options[index].values,
                };
            }

        });

        setVisibleOptions(returnedItems)

    }

    return (

        <Background>
            <Navbar loggedIn={true}/>
        <div className="container my-5">
                <span>
                    <ButtonBootstrap
                    secondarySmall={true}
                    text="Back">
                    </ButtonBootstrap>
                    <h1 className="mt-4">Settings</h1>
                </span>

                <div className="mt-4">
                    <input type="text" className="form-control mt-5" onChange={onChange} placeholder="Search..."/>
                </div>

                <div>
                    {visibleOptions.map((options) => (
                        <div key={options.header.name} className="mt-5 mt-2">
                            <h3>{options.header.name}</h3>

                            <div>
                            
                                {options.values.map((value) => (
                                    <a href={value.url}>
                                    <div key={value.name}>
                                        <ul className="list-group">
                                            <li className="list-group-item mb-2">
                                                <h6  className="font-weight-bold">{value.name}</h6>
                                                <p>{value.description}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    </a>
                                ))}
                            </div>   
                        </div>
                    )) }
                </div>
        </div>
        </Background>
    )
 }