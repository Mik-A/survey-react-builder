import { combineReducers } from 'redux';
import { tabsReducer,
         pagesReducer,
         questionsReducer,
         triggersReducer,
         modalUiReducer,
         surveyBuilderUiReducer,
         surveyTabUiReducer } from '../survey-builder/modules/SurveyReducers';

const entitiesReducer = combineReducers({
  pages: pagesReducer,
  questions: questionsReducer,
  triggers: triggersReducer
});

const uiReducer = combineReducers({
  modal: modalUiReducer,
  surveyBuilder: surveyBuilderUiReducer,
  surveyTab: surveyTabUiReducer
});

const rootReducer = combineReducers({
  tabs: tabsReducer,
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
