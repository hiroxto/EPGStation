import { inject, injectable } from 'inversify';
import UaUtil from '../../../util/UaUtil';
import AbstractStorageBaseModel from '../AbstractStorageBaseModel';
import IStorageOperationModel from '../IStorageOperationModel';
import ISettingStorageModel, { ISettingValue } from './ISettingStorageModel';

@injectable()
export default class SettingStorageModel extends AbstractStorageBaseModel<ISettingValue>
    implements ISettingStorageModel {
    constructor(@inject('IStorageOperationModel') op: IStorageOperationModel) {
        super(op);
    }

    public getDefaultValue(): ISettingValue {
        return {
            isForceDarkTheme: false,
            isOnAirTabListView: true,
            isOnAirHalfWidthDisplayed: true,
            onAirM2TSViewURLScheme: null,
            guideMode: 'sequential',
            guideLength: 24,
            isGuideHalfWidthDisplayed: true,
            isEnableDisplayForEachBroadcastWave: false,
            reservesLength: 24,
            isReservesHalfWidthDisplayed: true,
            recordedLength: 24,
            isPreferredPlayingOnWeb: UaUtil.isAndroid() !== true && UaUtil.isiOS() !== true,
            isRecordedHalfWidthDisplayed: true,
            shouldUseRecordedViewURLScheme: true,
            recordedViewURLScheme: null,
            shouldUseRecordedDownloadURLScheme: true,
            recordedDownloadURLScheme: null,
            searchLength: 300,
            isSearchHalfWidthDisplayed: true,
            isEnableAutoScrollWhenEditingRule: true,
            isEnableCopyKeywordToDirectory: false,
            isCheckAvoidDuplicate: false,
            isEnableEncodingSettingWhenCreateRule: false,
            isCheckDeleteOriginalAfterEncode: false,
            rulesLength: 24,
        };
    }

    public getStorageKey(): string {
        return 'settings';
    }
}