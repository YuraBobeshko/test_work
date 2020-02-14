import { IParseNPMVersion } from '../../interfaces/interfaces'

function parseNPMVersion(x: string): IParseNPMVersion {
  const result: string[] = x.split(/\b@/)
  return { name: result[0], version: result[1] };
}

export default parseNPMVersion;