import { ARBaseControls } from "./ARBaseControls";
import * as THREE from "three";
import { ARContext } from "./THREEAR";
import { Object3D } from "three";
interface ARMarkerControlsParameters {
    size: number;
    type: "pattern" | "barcode" | "unknown";
    patternUrl: null | string;
    barcodeValue: null | number;
    changeMatrixMode: "modelViewMatrix" | "cameraTransformMatrix";
    minConfidence: number;
    [key: string]: any;
}
export declare class ARMarkerControls extends ARBaseControls {
    private context;
    private smoothMatrices;
    private parameters;
    constructor(context: ARContext, object3d: Object3D, parameters: ARMarkerControlsParameters);
    setParameters(parameters: ARMarkerControlsParameters): void;
    dispose(): void;
    /**
     * When you actually got a new modelViewMatrix, you need to perfom a whole bunch
     * of things. it is done here.
     */
    updateWithModelViewMatrix(modelViewMatrix: THREE.Matrix4): boolean;
    /**
     * provide a name for a marker
     * - silly heuristic for now
     * - should be improved
     */
    name(): string;
    _initArtoolkit(): void;
}
export default ARMarkerControls;
