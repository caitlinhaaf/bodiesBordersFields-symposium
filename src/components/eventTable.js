import React from "react"
import moment from 'moment'

const EventTable = ({eventItems, colorClass, hdrClass, ...props}) => {

    return (
        <table>
            <tbody>
                {
                    eventItems.map((item, i) => (
                        <tr key={i}>
                            <td>
                                {moment(item.startTime).local().format(`LT`)}
                                {item.endTime &&
                                    ` - ${moment(item.endTime).local().format(`LT`)}`
                                } 
                                <br/>
                                {item.location}
                            </td>
                            <td className={colorClass}>
                                <h4 className={hdrClass}>{item.itemName}</h4>
                                <p dangerouslySetInnerHTML={{ __html: item.itemDescription }}  />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default EventTable
