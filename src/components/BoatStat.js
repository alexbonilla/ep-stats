export default function BoatStat (props) {

  const { boatstat } = props;

  return (
              <tr>
                <td>{boatstat.school}</td>
                <td>{boatstat.boat_name}</td>
                <td className="has-text-right">{boatstat.depth}</td>
                <td>{boatstat.id}</td>
                <td className="has-text-right">{boatstat.total_distance}</td>
                <td className="has-text-right">{boatstat.linear_distance}</td>
                <td className="has-text-right">{boatstat.days}</td>
                <td className="has-text-right">{boatstat.points}</td>
                <td className="has-text-right">{boatstat.east_speed}</td>
                <td className="has-text-right">{boatstat.north_speed}</td>
                <td className="has-text-right">{boatstat.mean_speed}</td>
              </tr>
  )
}
