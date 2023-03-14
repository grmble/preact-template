// @ts-nocheck missing types for preact-cli cause big red warning
import { getFiles, setupPrecaching, setupRouting } from "preact-cli/sw/"

setupRouting()
setupPrecaching(getFiles())
