import { IAuthService, IMenuTreeItem, UserContext } from '@wface/ioc';
import { Inject, Injectable } from 'react.di';


@Injectable
export default class MockAuthService implements IAuthService {    
    
    public login(username: string, password: string) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            if(username === "connection-error") {
                setTimeout(() => reject("Connection error"), 1000);
            }

            let result = true;

            if(username === "wrong-password") {
                result = false;
            }

            setTimeout(() => resolve(result), 1500);
        });
    }

    public getMenuTree(): Promise<IMenuTreeItem[]> {        

        return new Promise((resolve, reject) => {
            // setTimeout(() => reject(''), 1000);

            const tree: IMenuTreeItem[] = [
                {
                    icon: 'send',
                    id: "1",
                    project: 'system',
                    screen: 'TestScreen',
                    text:'Dashboard',                                        
                },
                {
                    icon: 'send',
                    id: "2",
                    project: 'system',
                    screen: 'TestScreen404',
                    text:'Inbox'
                },
                {
                    divideBefore: true,
                    icon: 'send',
                    id: "3",
                    subNodes: [
                        {
                            icon: 'send',
                            id: "3.1",
                            project: 'system',
                            screen: 'TestScreen',
                            text: 'Crm 1'
                        },
                        {
                            icon: 'send',
                            id: "3.2",
                            project: 'system',
                            screen: 'TestScreen',
                            text: 'Crm 2'
                        }
                    ],
                    text: 'CRM',                    
                },
                {
                    divideBefore: true,
                    icon: 'send',
                    id: "4",
                    subNodes: [
                        {
                            icon: 'send',
                            id: "4.1",
                            project: 'system',
                            screen: 'TestScreen',
                            text: 'Billing 1'
                        },
                        {
                            icon: 'send',
                            id: "4.2",
                            project: 'system',
                            screen: 'TestScreen',
                            text: 'Billing 2'
                        },
                        {
                            icon: 'send',
                            id: "4.3",
                            subNodes: [
                                {
                                    icon: 'send',
                                    id: "4.3.1",
                                    project: 'system',
                                    screen: 'TestScreen',
                                    text: 'Billing Alt 1'
                                },
                                {
                                    icon: 'send',
                                    id: "4.3.2",
                                    project: 'system',
                                    screen: 'TestScreen',
                                    text: 'Billing Alt 2'
                                },
                                {
                                    icon: 'send',
                                    id: "4.3.3",
                                    project: 'system',
                                    screen: 'TestScreen',
                                    text: 'Billing Alt 3'
                                },
                                {
                                    icon: 'send',
                                    id: "4.3.4",
                                    project: 'system',
                                    screen: 'TestScreen',
                                    text: 'Billing Alt 4'
                                }
                            ],
                            text: 'Billing Alt Ekranlar', 
                        }
                    ],
                    text: 'Billing',                    
                }
            ]
            
            setTimeout(() => resolve(tree), 1200);
        });
    }
}