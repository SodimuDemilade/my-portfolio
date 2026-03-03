import './auth.css';
import {type ReactNode} from "react";

type AuthLayoutProps = {
    title: string;
    children?: ReactNode;
    hasForm?: boolean
}

export const AuthLayout = ({title, children, hasForm}: AuthLayoutProps) => {
    return (
        <div style={{height: '100vh'}}>
            {/*<HeaderMenu/>*/}
            {hasForm ?
                <div className={"auth-container"}>
                    <div className="auth-form">
                        <div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {/*<img*/}
                                {/*    src={Logo}*/}
                                {/*    alt="Questence" width="200"/>*/}
                            </div>
                            <h2 className="auth-title">{title}</h2>
                        </div>
                        {children}
                    </div>
                </div> :
                <div style={{height: '100%'}}>
                    {children}
                </div>
            }
        </div>
    )
}