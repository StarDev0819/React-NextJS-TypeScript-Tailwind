import ALink from "./ALink";

export default function InfoBox({ data }) {
    return (
        <>
            <ALink href="/page-two">
                <div className="flex overflow-hidden h-auto lg:h-32 items-center mb-4">
                    {data.avatar}

                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal flex-1">
                        <h3 className="text-black font-bold text-base mb-2 leading-tight">{data.title}</h3>
                        <h4 className="text-grey-darker text-sm text-text-300 mb-2">{data.subTitle}</h4>
                        <h5 className="text-grey-darker text-sm text-blue-100">+{data.users} users</h5>
                    </div>

                    <svg width="8" height="14" className="ml-3" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33333 1.66667L6.66666 7L1.33333 12.3333" stroke="#6F6E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </ALink>
        </>
    );
}