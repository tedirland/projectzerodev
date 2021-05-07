import CountyCard from '@/components/counties/CountyCard';
import Link from 'next/link';

import {
  useGetCounties,
  useCreateCounty,
  useUpdateCounty,
  useDeleteCounty,
} from '../../apolloLogic/actions';
import withApollo from '../../hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { GET_COUNTIES, GET_COUNTY } from '../../apolloLogic/queries';

const Counties = ({ query }) => {
  const { data } = useGetCounties();
  const [updateCounty] = useUpdateCounty();
  const [deleteCounty, { data: dataD }] = useDeleteCounty();
  const [createCounty] = useCreateCounty();

  const counties = (data && data.counties) || [];
  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Counties</h1>
          </div>
        </div>
        <button className="btn btn-primary" onClick={createCounty}>
          Add County
        </button>
      </section>
      <section className="pb-5">
        <div className="row">
          {counties.map(county => (
            <div key={county._id} className="col-md-4">
              <Link href="/counties/[id" as={`/counties/${county._id}`}>
                <a className="card-link">
                  <CountyCard county={county} />
                </a>
              </Link>
              <button
                className="btn btn-warning"
                onClick={() => updateCounty({ variables: { id: county._id } })}
              >
                Upate County
              </button>
              <button
                className="btn btn-danger ml-3"
                onClick={() => deleteCounty({ variables: { id: county._id } })}
              >
                Delete County
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default withApollo(Counties, { getDataFromTree });
