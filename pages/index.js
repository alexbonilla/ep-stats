import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import BoatStat from '../src/components/BoatStat.js'

export default function Home() {

  const [boatstats, setBoatstats] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

      axios.get(`https://dev.educationalpassages.org/new_scripts_test/stats.php`)
      .then(response => {
        if(response.status === 200){
          setBoatstats(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for boat stats data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>
  } else {


  return (
    <>
      <section id="about" className="container mt-4 mb-6 has-text-centered">
        <h1 className="title is-1">Miniboat Statistics</h1>
        <h2 className="subtitle is-3">Ordered by deployment_id</h2>
        <h3 className="subtitle is-4"><i>(Note: Speeds not accurate for those units ahsore.)</i></h3>
      </section>
      <section id="about" className="container mt-4 mb-6">
        <div className="columns is-multiline">
          <div className="column is-12">
            <table className="table">
              <thead>
                <tr>
                  <th>lab/school</th>
                  <th>PI/miniboat</th>
                  <th>depth (m)</th>
                  <th>deployment_id</th>
                  <th>totaldist (km)</th>
                  <th>lineardist (km)</th>
                  <th>days</th>
                  <th>#pts</th>
                  <th>east (cm/s)</th>
                  <th>north (cm/s)</th>
                  <th>mean speed (cm/s)</th>
                </tr>
              </thead>
              <tbody>
                {
                  boatstats && boatstats.data && boatstats.data.map((record)  =>
                    {
                      return <BoatStat boatstat={record}  key={uuidv4()} />
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
}
