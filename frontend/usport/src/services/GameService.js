import axios from 'axios';

class GameService{
    createGame(fieldId, sportId, reservartionDateRange){
        // store in db
        const requestBody = {
         "sport_id": sportId,
         "field_id": fieldId,
         "reservation_date": reservartionDateRange
        };
        return axios.post('http://localhost:8080/api/game/create', requestBody);
     }
}

const gameService = new GameService();

export default gameService;
