import React from 'react';
import dynamic from 'next/dynamic'
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';

//import Components
import Card from '../components/features/Card';
import Accordion from '../components/features/Accordion';
import ALink from '../components/features/ALink';
import ActivityBox from '../components/features/ActivityBox';

//import Icon
import { GlobeAltIcon } from '@heroicons/react/solid';

//import Data
import { activityData } from '../mock-data/data';

const pageTwo = (props) => {
    const { tabCount = 2 } = props;

    return (
        <div>
            <Tabs selectedTabClassName="active" selectedTabPanelClassName="show" color="">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <TabList className="nav nav-tabs flex mb-0 list-none flex-wrap pt-3 flex-row justify-center nav-underline border-b-[1px] border-[#DFDFE0]">
                            <Tab className={`inline-block py-3 px-4 font-medium text-center text-[#6F6E73] border-b-[3px] border-transparent hover:text-black hover:border-black dark:text-gray-400 dark:hover:text-gray-300 duration-300 w-1/${tabCount}`}>
                                <span className="font-semibold block text-[15px]">
                                    Details
                                </span>
                            </Tab>
                            <Tab className={`inline-block py-3 px-4 font-medium text-center text-[#6F6E73] border-b-[3px] border-transparent hover:text-black hover:border-black dark:text-gray-400 dark:hover:text-gray-300 duration-300 w-1/${tabCount}`}>
                                <span className="font-semibold block text-[15px]">
                                    Activities
                                </span>
                            </Tab>
                        </TabList>

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
                                </TabPanel>

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
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};

export default pageTwo;
