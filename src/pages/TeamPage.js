import { React, useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
//import { PieChart } from 'react-minimal-pie-chart';
//import "../assets/Isp.scss";



export const TeamPage = () => {

    const [team, setTeam] = useState({matches:[]});
    const { teamName } = useParams();
    useEffect(
        () => {
         const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8081/team/${teamName}`);
            const data = await response.json();       
            console.log(data);
            setTeam(data);
              };
         fetchMatches();
            


        },[teamName],
    ); 

    if (!team || !team.teamName) {
         return <h1>Team no encontrado!</h1>
    }
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1> 
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            {team.matches.slice(1).map( match => <MatchSmallCard  key={match.id} match={match} />)}
            <MatchSmallCard/>
            <MatchSmallCard/>
            <MatchSmallCard/>
        </div>
        );
       
    
}