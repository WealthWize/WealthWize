import React from 'react';

const FilterIcon = ({ filterIcon }) => {
    return (
        <>
            <svg className="filterIcon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.09467 2.09467C3.42914 0.760201 5.42603 0.25 8 0.25H14C16.574 0.25 18.5709 0.760201 19.9053 2.09467C21.2398 3.42914 21.75 5.42603 21.75 8V14C21.75 16.574 21.2398 18.5709 19.9053 19.9053C18.5709 21.2398 16.574 21.75 14 21.75H8C5.42603 21.75 3.42914 21.2398 2.09467 19.9053C0.760201 18.5709 0.25 16.574 0.25 14V8C0.25 5.42603 0.760201 3.42914 2.09467 2.09467ZM3.15533 3.15533C2.2398 4.07086 1.75 5.57397 1.75 8V14C1.75 16.426 2.2398 17.9291 3.15533 18.8447C4.07086 19.7602 5.57397 20.25 8 20.25H14C16.426 20.25 17.9291 19.7602 18.8447 18.8447C19.7602 17.9291 20.25 16.426 20.25 14V8C20.25 5.57397 19.7602 4.07086 18.8447 3.15533C17.9291 2.2398 16.426 1.75 14 1.75H8C5.57397 1.75 4.07086 2.2398 3.15533 3.15533ZM6.25 8.25C6.25 7.83579 6.58579 7.5 7 7.5H15C15.4142 7.5 15.75 7.83579 15.75 8.25C15.75 8.66421 15.4142 9 15 9H7C6.58579 9 6.25 8.66421 6.25 8.25ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H13C13.4142 10.5 13.75 10.8358 13.75 11.25C13.75 11.6642 13.4142 12 13 12H9C8.58579 12 8.25 11.6642 8.25 11.25ZM9.25 14.25C9.25 13.8358 9.58579 13.5 10 13.5H12C12.4142 13.5 12.75 13.8358 12.75 14.25C12.75 14.6642 12.4142 15 12 15H10C9.58579 15 9.25 14.6642 9.25 14.25Z" fill="black" />
            </svg>
        </>
    )
}

export default FilterIcon;