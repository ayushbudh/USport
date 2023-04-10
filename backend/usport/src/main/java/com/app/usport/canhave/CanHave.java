package com.app.usport.canhave;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CanHave {
    private int id;
    private int userMetricId;
    private int skillId;

    public CanHave(int id,
                   @JsonProperty("user_metric_id") int userMetricId,
                   @JsonProperty("skill_id") int skillId) {
        this.id = id;
        this.userMetricId = userMetricId;
        this.skillId = skillId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserMetricId() {
        return userMetricId;
    }

    public void setUserMetricId(int userMetricId) {
        this.userMetricId = userMetricId;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }
}