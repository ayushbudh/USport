package com.app.usport.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    private GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository){
        this.gameRepository = gameRepository;
    }

    public void createGame(Game game){
        this.gameRepository.createGame(game);
    }
}
