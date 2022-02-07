const Step = ({ currentStep }) => (
  <nav aria-label="Progress">
    <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8 mt-8 mb-8">
      <li className="md:flex-1">
        <button
          type="button"
          className={`cursor-default w-full group pl-4 py-2 flex flex-col border-l-4 ${
            currentStep <= 3
              ? 'border-indigo-600 hover:border-indigo-800'
              : 'border-gray-200 hover:border-gray-300'
          } md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4`}>
          <span
            className={`text-xs ${
              currentStep <= 3
                ? 'text-indigo-600 group-hover:text-indigo-800'
                : 'text-gray-500 group-hover:text-gray-700'
            } font-semibold tracking-wide uppercase`}>
            Etape 1
          </span>
          <span className="text-sm font-medium">Informations personnelles</span>
        </button>
      </li>
      <li className="md:flex-1">
        <button
          type="button"
          className={`cursor-default w-full group pl-4 py-2 flex flex-col border-l-4 ${
            currentStep <= 3 && currentStep > 1
              ? 'border-indigo-600 hover:border-indigo-800'
              : 'border-gray-200 hover:border-gray-300'
          } md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4`}>
          <span
            className={`text-xs ${
              currentStep <= 3 && currentStep > 1
                ? 'text-indigo-600 group-hover:text-indigo-800'
                : 'text-gray-500 group-hover:text-gray-700'
            } font-semibold tracking-wide uppercase`}>
            Etape 2
          </span>
          <span className="text-sm font-medium">Choissisez votre film</span>
        </button>
      </li>
      <li className="md:flex-1">
        <button
          type="button"
          className={`cursor-default w-full group pl-4 py-2 flex flex-col border-l-4 ${
            currentStep === 3
              ? 'border-indigo-600 hover:border-indigo-800'
              : 'border-gray-200 hover:border-gray-300'
          } md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4`}>
          <span
            className={`text-xs ${
              currentStep === 3
                ? 'text-indigo-600 group-hover:text-indigo-800'
                : 'text-gray-500 group-hover:text-gray-700'
            } font-semibold tracking-wide uppercase`}>
            Etape 3
          </span>
          <span className="text-sm font-medium">Récapitulatif</span>
        </button>
      </li>
    </ol>
  </nav>
);
export default Step;
