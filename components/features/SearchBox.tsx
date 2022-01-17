export default function SearchBox() {
    return (
        <div className="container flex mx-auto search-box-wrap items-center justify-between">
            <div className="flex rounded bg-gray search-box">
                <button className="flex items-center justify-center px-3">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.481 17.5L13.7426 13.755L17.481 17.5ZM15.8143 8.74999C15.8143 10.6286 15.068 12.4303 13.7397 13.7587C12.4113 15.087 10.6096 15.8333 8.73098 15.8333C6.85236 15.8333 5.05069 15.087 3.7223 13.7587C2.39392 12.4303 1.64764 10.6286 1.64764 8.74999C1.64764 6.87137 2.39392 5.0697 3.7223 3.74132C5.05069 2.41293 6.85236 1.66666 8.73098 1.66666C10.6096 1.66666 12.4113 2.41293 13.7397 3.74132C15.068 5.0697 15.8143 6.87137 15.8143 8.74999V8.74999Z" stroke="#6F6E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
                <input type="text" className="py-2 border-none bg-transparent" placeholder="Search..." />
            </div>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.981 7C17.9515 7 21.981 6.10457 21.981 5C21.981 3.89543 17.9515 3 12.981 3C8.01039 3 3.98096 3.89543 3.98096 5C3.98096 6.10457 8.01039 7 12.981 7Z" stroke="#6F6E73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.98096 5C3.98096 7.23 7.85196 11.674 9.83696 13.805C10.5651 14.5769 10.9739 15.5959 10.981 16.657V22L14.981 20V16.657C14.981 15.596 15.402 14.582 16.125 13.805C18.111 11.674 21.981 7.231 21.981 5" stroke="#6F6E73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}