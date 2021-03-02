import React, { memo } from 'react';
import PageItem from './PageItem';
import './Pagination.css';

function getPages(pages, currentPage) {
    const minPage = 1;
    const length = Math.min(pages, 5);

    let start = currentPage - Math.floor(length / 2);
    start = Math.max(start, minPage);
    start = Math.min(start, minPage + pages - length);
   
    return Array.from({ length }, (_value, i) => start + i);
}

function Pagination({ next, onChange, page, pages, prev }) {
    const items = getPages(pages, page).map(item => {
        return <PageItem key={item} current={item === page} item={item} onChange={onChange} />;
    });

    return (
        <div className={`pagination grid grid-cols-${items.length + 2}`}>
            <PageItem disabled={prev === null} item={prev} onChange={onChange} text={'<'} />
            { items }
            <PageItem disabled={next === null} item={next} onChange={onChange} text={'>'} />
        </div>
    );
}

Pagination.displayName = 'Components/Generic/Pagination/Pagination';

export default memo(Pagination);