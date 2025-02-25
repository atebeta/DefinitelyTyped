import { ShaderNode } from '../../shadernode/ShaderNode.js';
import Node from '../../core/Node.js';

declare const V_GGX_SmithCorrelated: ShaderNode<{ alpha: Node; dotNL: Node; dotNV: Node }>;

export default V_GGX_SmithCorrelated;
