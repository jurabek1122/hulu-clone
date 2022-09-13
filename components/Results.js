import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:grid-cols-4'>
            {results.map(result => (
                <Thumbnail key={result.key} result={result} />
            ))}
        </div>
    );
};

export default Results;

