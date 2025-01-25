import { RecordID, RecordElement } from './interface';

declare function addRecord(record: RecordElement): number;
declare function removeRecord(recordId: RecordID): void;
declare function modifyRecord(recordId: RecordID, record: RecordElement): number;
