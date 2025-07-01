package com.traitly.server.controller;

import com.traitly.server.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/analyze")
public class AnalysisController {

    @Autowired
    private AIService aiService;

    @GetMapping("/{userName}")
    public ResponseEntity<?> getAns(@PathVariable String userName){
        return ResponseEntity.ok(aiService.getResponse(userName));
    }

}
