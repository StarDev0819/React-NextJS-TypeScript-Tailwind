import React from 'react';
import dynamic from 'next/dynamic'
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';

// Import Custom Components
import Card from '../components/features/Card';
import Accordion from '../components/features/Accordion';
import ALink from '../components/features/ALink';
import ActivityBox from '../components/features/ActivityBox';
import Button from '../components/features/Button';

// Import Custom Componet
import Header from "~/components/features/Header";

//import Icon
import { GlobeAltIcon } from '@heroicons/react/solid';

//import Data
import { activityData } from '../mock-data/data';
import { InfoData } from '../mock-data/data';

export default function pageTwo(props) {
    const { tabCount = 2 } = props;

    return (
        <React.Fragment>
            <Header />
            <main>
                <div className='relative container px-5'>
                    <div className='absolute top-0 right-0 left-0 bg-accent-400' style={{height: '57px'}}></div>
                    <div className="py-7 relative">
                        <div className='flex justify-between'>
                            {InfoData[1].avatar}
                            <ALink href="#" className="flex items-center text-blue-100 mt-9">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.106 7.875L16.731 2.25" stroke="#587BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.981 2.25H16.731V6" stroke="#587BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.731 10.5V14.25C16.731 14.6478 16.5729 15.0294 16.2916 15.3107C16.0103 15.592 15.6288 15.75 15.231 15.75H4.73096C4.33313 15.75 3.9516 15.592 3.6703 15.3107C3.38899 15.0294 3.23096 14.6478 3.23096 14.25V3.75C3.23096 3.35218 3.38899 2.97064 3.6703 2.68934C3.9516 2.40804 4.33313 2.25 4.73096 2.25H8.48096" stroke="#587BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>Share</span>
                            </ALink>
                        </div>

                        <h3 className="text-text-200 text-lg font-semibold mt-2.5">{InfoData[1].title}</h3>
                        <h4 className="text-grey-darker text-sm text-text-300 my-2.5 font-medium">{InfoData[1].subTitle}</h4>
                        <ALink href="#" className="text-blue-100">Utilities</ALink>

                        <div className='flex' style={{marginTop: '18px'}}>
                            <Button className="rounded-large bg-text-200 text-white" style={{width: '105px', marginRight: '13px'}}>
                                Open
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.985 9.414L8.37796 18.021L6.96396 16.607L15.57 8H7.98496V6H18.985V17H16.985V9.414Z" fill="white"/>
                                </svg>
                            </Button>
                            <h4 className='flex items-center text-grey-darker text-sm text-text-300 my-2.5 font-medium'>
                                <svg className='mx-0.5' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.64761 5.33333C6.75218 5.33333 7.64761 4.4379 7.64761 3.33333C7.64761 2.22876 6.75218 1.33333 5.64761 1.33333C4.54304 1.33333 3.64761 2.22876 3.64761 3.33333C3.64761 4.4379 4.54304 5.33333 5.64761 5.33333Z" fill="#6F6E73"/>
                                    <path d="M7.64759 8H4.91293C4.42554 8.00014 3.95498 8.17824 3.58965 8.50085C3.22432 8.82346 2.98936 9.26838 2.92893 9.752L2.50159 13.168C2.47815 13.3556 2.49487 13.5461 2.55066 13.7267C2.60645 13.9074 2.70003 14.0741 2.82518 14.2159C2.95033 14.3576 3.10419 14.4711 3.27656 14.5488C3.44892 14.6265 3.63585 14.6667 3.82493 14.6667H6.98093" fill="#6F6E73"/>
                                    <path d="M15.4603 13.168L15.0336 9.752C14.9731 9.26815 14.738 8.82305 14.3724 8.50041C14.0068 8.17777 13.5359 7.99981 13.0483 8H11.5789C11.0916 8.00014 10.621 8.17824 10.2557 8.50085C9.89033 8.82347 9.65538 9.26838 9.59494 9.752L9.16761 13.168C9.14416 13.3557 9.1609 13.5462 9.21673 13.7269C9.27256 13.9076 9.36619 14.0744 9.49141 14.2161C9.61664 14.3579 9.77058 14.4713 9.94303 14.549C10.1155 14.6267 10.3025 14.6668 10.4916 14.6667H14.1369C14.326 14.6667 14.5129 14.6265 14.6853 14.5488C14.8577 14.4711 15.0115 14.3576 15.1367 14.2159C15.2618 14.0741 15.3554 13.9074 15.4112 13.7267C15.467 13.5461 15.4837 13.3556 15.4603 13.168Z" fill="#6F6E73"/>
                                    <path d="M12.3143 5.33333C13.4189 5.33333 14.3143 4.4379 14.3143 3.33333C14.3143 2.22876 13.4189 1.33333 12.3143 1.33333C11.2097 1.33333 10.3143 2.22876 10.3143 3.33333C10.3143 4.4379 11.2097 5.33333 12.3143 5.33333Z" fill="#6F6E73"/>
                                </svg>
                                24,000 + users
                            </h4>
                        </div>
                    </div>
                </div>
                <Tabs selectedTabClassName="active" selectedTabPanelClassName="show" color="">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <TabList className="nav nav-tabs flex mb-0 list-none flex-wrap pt-3 flex-row justify-center nav-underline border-b-[1px] border-[#DFDFE0]">
                                <Tab className={`flex-1 inline-block py-3 px-4 font-medium text-center text-[#6F6E73] border-b-[3px] border-transparent hover:text-black hover:border-black dark:text-gray-400 dark:hover:text-gray-300 duration-300 w-1/${tabCount}`}>
                                    <span className="font-semibold block text-[15px]">
                                        Details
                                    </span>
                                </Tab>
                                <Tab className={`flex-1 inline-block py-3 px-4 font-medium text-center text-[#6F6E73] border-b-[3px] border-transparent hover:text-black hover:border-black dark:text-gray-400 dark:hover:text-gray-300 duration-300 w-1/${tabCount}`}>
                                    <span className="font-semibold block text-[15px]">
                                        Activities
                                    </span>
                                </Tab>
                            </TabList>
                            {/* End of TabList */}
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                                <div className="px-5 py-6 flex-auto">
                                    <TabPanel className="tab-pane">
                                        <Accordion>
                                            <Card title="Overview" expanded={true} adClass="py-3 text-base font-semibold appearance-none cursor-pointer text-[#414047] focus:outline-none flex items-center justify-between">
                                                <p className="text-[14px] font-medium leading-[22px] text-[#414047] mb-3">it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. </p>
                                                <ALink href="https://docusignn.io" className="text-[14px] text-blue-100 hover:opacity-70 duration-300"><GlobeAltIcon className="h-6 w-6 inline-block mr-1" />https://docusignn.io</ALink>
                                            </Card>

                                            <Card title="Review" adClass="py-3 text-base font-semibold appearance-none cursor-pointer text-[#414047] focus:outline-none flex items-center justify-between">
                                                <p className="text-[14px] font-medium leading-[22px] text-[#414047]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.
                                                In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget
                                                massa.</p>
                                            </Card>
                                        </Accordion>
                                        {/* End of Accordion */}
                                    </TabPanel>
                                    {/* End of Tab Panel */}
                                    <TabPanel className="tab-pane fade">
                                        <div className="flex justify-center mb-4">
                                            <span className="text-[13px] text-[#6F6E73] px-2 py-1 bg-zinc-100 rounded-3xl">
                                                {
                                                    activityData.length > 0 ? `${activityData.length} activity found` : "No activity found"
                                                }
                                            </span>
                                        </div>
                                        {
                                            activityData.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <ActivityBox data={item} />
                                                </React.Fragment>
                                            ))
                                        }
                                    </TabPanel>
                                    {/* End of Tab Panel */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </main>
        </React.Fragment>
    );
};
