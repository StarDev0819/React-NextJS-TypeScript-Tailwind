import ALink from "./ALink";

export default function ActivityBox({ data }) {
    var date1 = new Date();
    var date2 = new Date(data.date);
    var Difference_In_Days = ((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)).toFixed(0);

    return (
        <>
            <div className="flex overflow-hidden h-auto lg:h-16 items-center mb-4">
                <span>
                    {data.avatar}
                </span>

                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal">
                    <h3 className="text-black font-bold text-[15px] mb-1 leading-tight text-gray-600"><ALink href={`/users/${data.name.toLowerCase()}`} className="text-blue-100 hover:opacity-70 duration-300" >{data.name}</ALink> {data.type === "signed" ? "signed the contract successfully" : data.type === "requested" ? "requested to sign the contract" : data.type === "offer" ? `made an offer for collectible #${data.offerId}` : "invited you to docu sign" }</h3>
                    <h5 className="text-[13px] text-normal text-gray-500">{ Difference_In_Days === "0" ? "Today" : Difference_In_Days === "1" ? `${Difference_In_Days} day ago` : `${Difference_In_Days} days ago` }</h5>
                </div>
            </div>
            {/* End of Activity Box */}
        </>
    );
}