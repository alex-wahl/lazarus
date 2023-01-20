package lazarus.backend.model.ti8m;

import lazarus.steps.StepHelper;

public class Welcome extends StepHelper {
    private Session session;
    private Boolean success;
    private Long http_status;

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Long getHttp_status() {
        return http_status;
    }

    public void setHttp_status(Long http_status) {
        this.http_status = http_status;
    }

}

