import { IPaginationDirection } from '../../types/pagination.type';
import { PaginationDirection } from '../../Consts';

interface PaginationProps {
    itemsCount: number;
    pageSize: number;
    currentPage: number;
    handlePageChange: (pageChangeInfo: number | IPaginationDirection) => void;
};

const Pagination = ({ itemsCount, pageSize, currentPage, handlePageChange }: PaginationProps): JSX.Element => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = Array.from(Array(pageCount), (_, i) => i + 1);

    if (pageCount < 2) {
        return <></>;
    }

    const setPaginationState = (pageNumber: number, cssClass: string): string => {
        return currentPage === pageNumber ? cssClass : '';
    };

    const changeButtonToSpan = (pageNumber: number, paginationValue: number | IPaginationDirection): JSX.Element => {
        if (currentPage === pageNumber) {
            return <span className="page-link user-select-none">{paginationValue}</span>;
        }
        return <button className="page-link" onClick={() => handlePageChange(paginationValue)}>{paginationValue}</button>;
    };

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${setPaginationState(1, 'disabled')}`}>
                    {changeButtonToSpan(1, PaginationDirection.Previous)}
                </li>
                <>
                    {pages.map((pageNumber) => (
                        <li className={`page-item ${setPaginationState(pageNumber, 'active pe-none')}`} key={pageNumber} >
                            {changeButtonToSpan(pageNumber, pageNumber)}
                        </li>
                    ))}
                </>
                <li className={`page-item ${setPaginationState(pages.length, 'disabled')}`}>
                    {changeButtonToSpan(pageCount, PaginationDirection.Next)}
                </li>
            </ul>
        </nav>
    );
};

export { Pagination };
